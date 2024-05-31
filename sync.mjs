let isGuiInitialized = false;

const obj = {
    grid: false,
    color: 'none',
};

const guiControllerCallback = (gui) => {
	const previewStage = document.querySelector('.jetcraft-preview-stage');
	if (!previewStage) return;

    gui.add( document, 'title' );

    gui.add(obj, 'grid').onChange((value) => {
    	obj.grid = value;
    	document.querySelector('.jetcraft-testing-grid').classList.toggle('on');
    });

    gui.add(obj, 'color', ['none', 'default', 'violet', 'blue', 'purple', 'olive', 'orange', 'magenta', 'dark']).onChange((value) => {
        obj.color = value;
        previewStage.classList.forEach((prevClass) => {
            if (prevClass.startsWith('jetcraft-color-')) {
                previewStage.classList.remove(prevClass);
            }
        });

        previewStage.classList.add(`jetcraft-color-${obj.color}`);
    });
};

export default (GUI) => {
    if (!isGuiInitialized) {
    	const controllerStage = document.querySelector('.jetcraft-controller');
    	if (!controllerStage) return;

        const gui = new GUI({ 
        	container: controllerStage,
        	autoPlace: false,
        });
        guiControllerCallback(gui);
        isGuiInitialized = true;
    }
}