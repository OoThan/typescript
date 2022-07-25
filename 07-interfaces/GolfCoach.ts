import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyCoach(): string {
        return "Hit 100 balls at the golf range.";
    }
}