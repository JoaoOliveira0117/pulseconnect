const useController = (Controller, ...rest) => {
	const controllerInstance = (req, res) => new Controller(req, res).send();
	return [...rest, controllerInstance];
};

export default useController;
