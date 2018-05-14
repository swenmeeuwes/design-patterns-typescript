import Observer from "./base/Observer";
import Observable from "./base/Observable";
import TutorialEventTypes from "./TutorialEventTypes";

export default class AchievementHandler implements Observer {
    public onNotify(observable: Observable, eventIdentifier: string) {
        switch (eventIdentifier) {
            case TutorialEventTypes.FirstSteps:
                // Unlock 'first steps' achievement
                console.log(`Unlocked 'first steps' achievement!`);
                break;
            case TutorialEventTypes.ClearedTutorial:
                // Unlock 'cleared tutorial' achievement
                console.log(`Unlocked 'cleared tutorial' achievement!`);
                break;
        }
    }
}