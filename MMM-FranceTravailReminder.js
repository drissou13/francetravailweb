class MMMFranceTravailReminder {

    constructor() {
        this.showReminder = true; // Toujours affiché pour test web
        this.message = "Pense à actualiser ta situation France Travail";
    }

    getDom() {
        const wrapper = document.createElement("div");
        if (this.showReminder) {
            wrapper.className = "fade-in";
            wrapper.innerHTML = `
                <div style="text-align:center;">
                    <img src="public/logo.png"
                         style="width:120px; margin-bottom:10px;">
                    <div style="font-size:28px; font-weight:bold; color:red;">
                        ${this.message}
                    </div>
                </div>
            `;
        }
        return wrapper;
    }
}