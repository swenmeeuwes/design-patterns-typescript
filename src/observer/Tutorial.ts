import Observable from "./base/Observable";
import TutorialEventTypes from "./TutorialEventTypes";

// This class acts as an example of a concrete Observable
export default class Tutorial extends Observable {
    private _tutorialInstructions = [
        'Move around with the arrow keys.',
        'Look around with the mouse.'
    ];

    private _currentInstructionIndex = -1;

    public nextInstruction() {
        if (this._currentInstructionIndex < this._tutorialInstructions.length - 1) {
            this._currentInstructionIndex++;

            if (this._currentInstructionIndex === 0)
                this.notify(TutorialEventTypes.FirstSteps);

        } else {
            // End of tutorial reached
            this.notify(TutorialEventTypes.ClearedTutorial);
            return `Great job, you've completed the tutorial!`;
        }

        return this._tutorialInstructions[this._currentInstructionIndex];
    }
}