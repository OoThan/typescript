import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    getDailyCoach(): string {
        return "Practicd your spin bowling technique.";
    }
}