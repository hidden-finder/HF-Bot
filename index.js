console.clear();

import baileys, { jidDecode } from '@adiwajshing/baileys';
import path from 'path';
import P from 'pino';
import fs from 'fs-extra';
import { Boom } from '@hapi/boom';
import { platform } from 'process';
import { pathToFileURL } from 'url';

import config from './config/index.js';

const moduleURL = new URL(import.meta.url);

export const __dirname = platform == 'win32' ? path.dirname(moduleURL.pathname).slice(1) : path.dirname(moduleURL.pathname);

let shouldWait = false;

config.cli = parseCli();
config.options = config.cli.flags;

const { options, cli } = config;

const { default: makeWASocket, DisconnectReason, makeInMemoryStore, useSingleFileAuthState, DEFAULT_CONNECTION_CONFIG } = baileys;
const { state, saveState } = useSingleFileAuthState(`./session/${cli.input[0] ?? 'session-debug'}.json`);

export const store = makeInMemoryStore({ logger: P().child({ level: 'fatal', stream: 'store' }) });

if (options.json) {
	if (fs.existsSync(`./session/${cli.input[0] ?? 'session-debug'}.json`)) {
	}
}
