let isGuiInitialized = false;

const obj = {
    grid: false,
    radius: true,
    color: 'none',
};

const guiControllerCallback = (gui) => {
	const previewStage = document.querySelector('.jetcraft-preview-stage');
	if (!previewStage) return;

    gui.add( document, 'title' );

    gui.add(obj, 'grid').onChange((value) => {
        obj.grid = value;
        const grid = document.querySelector('.jetcraft-testing-grid');

        if (obj.grid) {
            grid.classList.add('on');
        } else {
            grid.classList.remove('on');
        }
    });

    gui.add(obj, 'radius').onChange((value) => {
        obj.radius = value;
        const classMethod = !obj.radius ? 'add' : 'remove';
        previewStage?.classList[classMethod]('jetcraft-no-radius');
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