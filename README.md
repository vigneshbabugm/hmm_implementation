# hmm_implementation
A simple hmm implementation where the program outputs the most likely sequence of states after every observation. 
It takes the states, sequence of observations, transition probabilities, emission probabilities,start probabilities, emissions and direction as inputs . Direction decides whether forward chaining must be done or backward chaining. 

Example Input and Output
Input
{
"states": ["Rainy", "Sunny"],
"emissions": ["Walk", "Shop", "Clean"],
"start_probabilities": {"Rainy": 0.6, "Sunny": 0.4},
"transition_probabilities": {"Rainy": {"Rainy": 0.7, "Sunny": 0.3},
"Sunny": {"Rainy": 0.4, "Sunny": 0.6}},
"emission_probabilities": {"Rainy": {"Walk": 0.1, "Shop": 0.4,
"Clean": 0.5}, "Sunny": {"Walk": 0.6, "Shop": 0.3, "Clean": 0.1}},
"direction": "forward",
"observations": ["Walk", "Shop", "Clean"]
}
Output
[
["Sunny"],
["Sunny", "Sunny"],
["Sunny", "Rainy", "Rainy"]
]



input
{
"states": ["A", "E", "I", "O", "U"],
"emissions": ["Flat", "Open", "Circle"],
"start_probabilities": {"A": 0.6, "E": 0.1, "I": 0.1, "O": 0.1,
"U": 0.1},
"transition_probabilities": {"A": {"A": 0.4, "E": 0.3, "I": 0.1,
"O": 0.1, "U": 0.1}, "E": {"A": 0.2, "E": 0.2, "I": 0.4, "O": 0.1,
"U": 0.1}, "I": {"A": 0.2, "E": 0.1, "I": 0.2, "O": 0.2, "U": 0.3},
"O": {"A": 0.2, "E": 0.1, "I": 0.1, "O": 0.2, "U": 0.4}, "U": {"A":
0.5, "E": 0.1, "I": 0.1, "O": 0.1, "U": 0.2}},
"emission_probabilities": {"A": {"Flat": 0.6, "Open": 0.1,
"Circle": 0.3}, "E": {"Flat": 0.6, "Open": 0.1, "Circle": 0.3}, "I":
{"Flat": 0.2, "Open": 0.7, "Circle": 0.1}, "O": {"Flat": 0.1, "Open":
0.2, "Circle": 0.7}, "U": {"Flat": 0.1, "Open": 0.2, "Circle": 0.7}},
"direction": "backward",
"observations": ["Flat", "Open", "Closed", "Closed"]
}
output
[
["O"]
["O", "U"]
["I", "O", "U"]
["A", "I", "O", "U"]
]
