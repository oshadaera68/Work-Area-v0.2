/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
 **/
class TypeWriter {
    constructor() {
        this.textData =["Full Stack Developer.", "I'm Youtuber."];
        this.currentWord = "";
        this.word = "";
        this.count = 0;
        this.index = 0;
        this.speed = 300;
        this.isDeleting = false;
        this.type();
    }

    type() {
        if (this.count >= this.textData.length) {
            this.count = 0;
        }

        this.currentWord = this.textData[this.count];

        if (this.isDeleting) {
            this.speed = 100;
            this.word = this.currentWord.slice(0, --this.index);

            if (this.word === "") {
                this.isDeleting = false;
                this.count++;
                this.speed = 200;
            }
        } else {
            this.word = this.currentWord.slice(0, ++this.index);

            if (this.word === this.currentWord) {
                this.isDeleting = true;
            }
        }

        const typewriter = document.querySelector(".typewriter");
        typewriter.innerHTML = this.word;

        setTimeout(() => this.type(), this.speed);
    }
}

const init = () => {
    new TypeWriter();
};

document.addEventListener("DOMContentLoaded", init());