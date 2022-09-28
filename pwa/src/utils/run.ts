interface Window {
    require: (module: string) => any;
}

export const run = (path: string) => {
    const { exec } = window.require("child_process");
    exec(path)
}

export default run;
