export class SettingsService {
    private altBackground = false

    setBackGround(isAlt: boolean) {
        this.altBackground = isAlt
    }

    isAltBackground() {
        return this.altBackground
    }
}