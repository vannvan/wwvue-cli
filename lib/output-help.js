module.exports = outputHelp = () => {
    console.log(`
Usage: wwvue <command> [options]

    Options: 

        -v, --version  Output current version number
        list, ls       Output available templates

    Commands:

        init [options] <dir>   Initialize a vue.js project from you selection
        help,h                 Print this help
        `)
}