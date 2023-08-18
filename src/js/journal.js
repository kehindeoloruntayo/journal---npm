export default class Entry {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    wordCount() {
        return this.body.split(" ").length;
    }

    vowelCount() {
        return this.body.match(/[aeiouAEIOU]/g).length;
    }

    consonantCount() {
        return this.body.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g).length;
    }

    getTeaser() {
        const sentences = this.body.split(".");
        const firstSentence = sentences[0].trim();
        const words = firstSentence.split(" ");
        return words.slice(0, 8).join(" ");
    }
}