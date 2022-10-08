import { EventEmitter } from 'events';

const GlobalConfig = {
	cmds: {},
	cache: {},
	cli: {},
	options: {},
	isFirstConnection: false,
	packname: 'Made by Nanda',
	author: 'Powered by Hidden Finder',
	commandsPath: [],
	log: console.log,
};

GlobalConfig.cmds.aliases = [];
GlobalConfig.cmds.commands = new Map();
GlobalConfig.cache.metadata = new Map();
GlobalConfig.cache.settings = new Map();
GlobalConfig.cache.users = new Map();
GlobalConfig.cache.interval = new Map();

EventEmitter.prototype.setMaxListeners(0);

export default GlobalConfig;
