#include "Random.h"
#include <iostream>
#include <limits>

void IgnoreLine()
{
	using std::cin;
	cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
}

bool HasUnextractedInput()
{
	return !std::cin.eof() && std::cin.peek() != '\n';
}

bool ClearFailedExtraction()
{
	// Check for failed extraction
	if (!std::cin) // If the previous extraction failed
	{
		if (std::cin.eof()) // If the stream was closed
		{
			std::exit(0); // Shut down the program now
		}

		// Let's handle the failure
		std::cin.clear(); // Put us back in 'normal' operation mode
		ignoreLine();     // And remove the bad input

		return true;
	}

	return false;
}

void GameSetting(int &numA, int &numB, int &times)
{
	using std::cout;
	using std::endl;
	using std::cin;
	while (true) {
		cout << "Please set number A: ";
		cin >> numA;
		if (ClearFailedExtraction()) {
			IgnoreLine();
			continue;
		}
		else { break; }
	}
	while (true) {
		cout << "Please set number B: ";
		cin >> numB;
		if (ClearFailedExtraction()) {
			IgnoreLine();
			continue;
		}
		else { break; }
	}
	while (true) {
		cout << "Please set max times you could try: ";
		cin >> times;
		if (ClearFailedExtraction()) {
			IgnoreLine();
			continue;
		}
		else { break; }
	}
}

bool Guess(int guess, int answer)
{
	using std::cout;
	using std::endl;

	if (guess == answer)
	{
		cout << "Correct! You win!" << endl;
		return true;
	}
	else if (guess > answer)
	{
		cout << "Your guess is too high." << endl;
	}
	else
	{
		cout << "Your guess is too low." << endl;
	}
	return false;
}

bool KeepPlaying() {
	using std::cout;
	using std::cin;

	while (true) {
		char keep;
		cout << "Would you like to play again (y/n)?";
		cin >> keep;
		if (ClearFailedExtraction()) {
			IgnoreLine();
			continue;
		}
		switch (keep) {
		case 'n': return false;
		case 'y': return true;
		}
	}
}

bool NeedSetting() {
	using std::cout;
	using std::cin;

	char need;
	cout << "Would you like to set new game settings (y/n)?";
	cin >> need;
	if (need == 'y' or need == 'Y') return true;
	else return false;
}

void PlayHali() {
	using std::cout;
	using std::endl;
	using std::cin;

	int numA{}, numB{}, times{};
	bool isSetting{ false };
	do {
		if (!isSetting) {
			cout << "Let's play a game. I'm thinking of a number between A and B (A < B). You have N tries to guess what it is." << endl;
			isSetting = true;
			GameSetting(numA, numB, times);
		}
		else {
			cout << "Let's play a game. I'm thinking of a number between " << numA << " and " << numB << ". You have " << times << " tries to guess what it is." << endl;
		}

		int answer{ Random::get(numA, numB) };
		int count{ 1 };

		while (count <= times) {
			int guess{};
			cout << "Guess #" << count << ": ";
			cin >> guess;

			if (Guess(guess, answer)) break;

			++count;
		}
		if (count > times) cout << "Sorry, you lose. The correct number was " << answer << "." << endl;

		if (!KeepPlaying()) break;
		if (NeedSetting()) isSetting = false;

	} while (true);

	cout << "Thank you for playing." << endl;
}

int main() 
{
	PlayHali();

	return 0;
}
