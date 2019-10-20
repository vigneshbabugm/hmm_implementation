/**
 * 
 *
 * Takes in the values for a HMM
 * Returns a nested array of the most likely states after each observation
 *
 * For 3 observations, there should be 3 elements in the returned array. Each element will be an array with length 1, 2, 3 respectively.
 */
exports.hmm = function(states, emissions, startProbabilities, transitionProbabilities, emissionProbabilities, direction, observations) {
	var output = [];
	switch(direction){ //forward chaining or backward chaining
		case "forward":
			output=forwardChaining(states,emissions,startProbabilities,transitionProbabilities,emissionProbabilities,observations);
			break;
		case "backward":
			output=backwardChaining(states,emissions,startProbabilities,transitionProbabilities,emissionProbabilities,observations);
			break;	
	}
    return output;
};

function forwardChaining(states,emissions,startProbabilities,transitionProbabilities,emissionProbabilities,observations){
	var probabilities=[{}]; // To store the probabilities 
	var sequence=[{}]; // To store the states which is used during the retracing step to print the output
	var finalOut=[];
	for(var i=0;i<states.length;i++){
		probabilities[0][states[i]] = startProbabilities[states[i]]*emissionProbabilities[states[i]][observations[0]];
		sequence[0][states[i]]=states[i];
	}
	for(var i=1;i<observations.length;i++){
		probabilities.push({});
		sequence.push({});
		for(var j=0;j<states.length;j++){	
			var check=0;
			var currentProb=Number.MIN_VALUE;	
			for(var k=0;k<states.length;k++){
				var prob=probabilities[i-1][states[k]]*transitionProbabilities[states[k]][states[j]]*emissionProbabilities[states[j]][observations[i]];
				if(currentProb<prob){
					currentProb=prob;
					check=k;
				}
			}
			probabilities[i][states[j]]=currentProb;
			sequence[i][states[j]]=states[check];
		}
		
	}// backtracing to print the most likely states
	var t=observations.length
	for(t=observations.length;t>0;t--){
	var out=[];
		var min=[0,0];
		for(var k=0;k<states.length;k++){
			if(min[0]<probabilities[t-1][states[k]]){
				min[0]=probabilities[t-1][states[k]];
				min[1]=states[k];

			}
		}
		out.push(min[1]);
		for(var p=t-1;p>0;p--){
			var l=out.length;
			out.push(sequence[p][out[l-1]]);
		}
		var rev=[];
		for(var q=0;q<out.length;q++){
			rev[q]=out[out.length-1-q];
		}
		finalOut.push(rev);
	}
	var output=[];
	for(var i=0;i<finalOut.length;i++){
		output[i]=finalOut[finalOut.length-1-i];
	}
	
	
	return output;
	
}
	


function backwardChaining(states,emissions,startProbabilities,transitionProbabilities,emissionProbabilities,observations){
	var probabilities=[{}];
	var sequence=[{}];
	var finalOut=[];
	var length=observations.length-1;
	for(var i=0;i<states.length;i++){
		probabilities[0][states[i]] = emissionProbabilities[states[i]][observations[length]];
		sequence[0][states[i]]=states[i];
	}
	//base case
	

	for(var i=1;i<observations.length;i++){
		probabilities.push({});
		sequence.push({});
		for(var j=0;j<states.length;j++){	
			var check=0;
			var currentProb=Number.MIN_VALUE;	
			for(var k=0;k<states.length;k++){
				var prob=probabilities[i-1][states[k]]*transitionProbabilities[states[j]][states[k]]*emissionProbabilities[states[j]][observations[length-i]];
				if(currentProb<prob){
					currentProb=prob;
					check=k;
				}
			}
			probabilities[i][states[j]]=currentProb;
			sequence[i][states[j]]=states[check];
			
		}
		
	}
	for(var i=0;i<states.length;i++){
		probabilities[length][states[i]]=probabilities[length][states[i]]*startProbabilities[states[i]]
		
	}// backtracing to print the most likely states
	var t;
	for(t=observations.length-1;t>=0;t--){
	var out=[];
		var min=[0,0];
		for(var k=0;k<states.length;k++){
			if(min[0]<probabilities[t][states[k]]){
				min[0]=probabilities[t][states[k]];
				min[1]=states[k];

			}
		}
		out.push(min[1]);
		for(var p=t;p>0;p--){
			var l=out.length;
			out.push(sequence[p][out[l-1]]);
		}
		finalOut.push(out);
	}
	var output=[];
	for(var i=0;i<finalOut.length;i++){
		output[i]=finalOut[finalOut.length-1-i];
	}
	return output;
	
}