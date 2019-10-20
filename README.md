# hmm_implementation
A simple hmm implementation where the program outputs the most likely sequence of states after every observation. 
It takes the states, sequence of observations, transition probabilities, emission probabilities,start probabilities, emissions and direction as inputs . Direction decides whether forward chaining must be done or backward chaining. 
<br />



Example Input and Output
<br />
Input 
<br />
{ 
<br />
"states": ["Rainy", "Sunny"],
<br />
"emissions": ["Walk", "Shop", "Clean"],
<br />
"start_probabilities": {"Rainy": 0.6, "Sunny": 0.4},
<br />
"transition_probabilities": {"Rainy": {"Rainy": 0.7, "Sunny": 0.3},
<br />
"Sunny": {"Rainy": 0.4, "Sunny": 0.6}},
<br />
"emission_probabilities": {"Rainy": {"Walk": 0.1, "Shop": 0.4,
<br />
"Clean": 0.5}, "Sunny": {"Walk": 0.6, "Shop": 0.3, "Clean": 0.1}},
<br />
"direction": "forward",
<br />
"observations": ["Walk", "Shop", "Clean"]
<br />
}
<br />
Output
<br />
[
<br />
["Sunny"],
<br />
["Sunny", "Sunny"],
<br />
["Sunny", "Rainy", "Rainy"]
<br />
]
<br />

<br />
<br />
input
<br />
{
<br />
"states": ["A", "E", "I", "O", "U"],
<br />
"emissions": ["Flat", "Open", "Circle"],
<br />
"start_probabilities": {"A": 0.6, "E": 0.1, "I": 0.1, "O": 0.1,
"U": 0.1},
<br />
"transition_probabilities": {"A": {"A": 0.4, "E": 0.3, "I": 0.1,
<br />
"O": 0.1, "U": 0.1}, "E": {"A": 0.2, "E": 0.2, "I": 0.4, "O": 0.1,
<br />
"U": 0.1}, "I": {"A": 0.2, "E": 0.1, "I": 0.2, "O": 0.2, "U": 0.3},
<br />
"O": {"A": 0.2, "E": 0.1, "I": 0.1, "O": 0.2, "U": 0.4}, "U": {"A":
<br />
0.5, "E": 0.1, "I": 0.1, "O": 0.1, "U": 0.2}},
<br />
"emission_probabilities": {"A": {"Flat": 0.6, "Open": 0.1,
<br />
"Circle": 0.3}, "E": {"Flat": 0.6, "Open": 0.1, "Circle": 0.3}, "I":
<br />
{"Flat": 0.2, "Open": 0.7, "Circle": 0.1}, "O": {"Flat": 0.1, "Open":
<br />
0.2, "Circle": 0.7}, "U": {"Flat": 0.1, "Open": 0.2, "Circle": 0.7}},
<br />
"direction": "backward",
<br />
"observations": ["Flat", "Open", "Closed", "Closed"]
<br />
}
<br />
output
<br />
[
<br />
["O"]
<br />
["O", "U"]
<br />
["I", "O", "U"]
<br />
["A", "I", "O", "U"]
<br />
]
<br />
