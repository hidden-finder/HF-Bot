export default GlobalConfig = {
	cmds: {},
	cache: {},
	isFirstConnection: false,
	packname: 'Made by Void',
	author: 'Powered by Hidden Finder',
	commandsPath: [],
	log: console.log,
};

config.cmds.commands = new Map();
config.cmds.aliases = [];

config.cache.metadata = new Map();
config.cache.settings = new Map();
config.cache.users = new Map();
config.cache.interval = new Map();

EventEmitter.prototype.setMaxListeners(0);
