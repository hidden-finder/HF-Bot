import fs from 'fs-extra';
import meow from 'meow';
import config from '../../config/index.js';

export const help = () => `
	 Usage
	   $ node . <session> <options>

	 Options
	   --prefix, -p          Set your custom prefix.
	   --restrict, -e        Restrict every moderator commands.
	   --no_logs, -n         Not showing any logs in the meantime still respond for any commands.
	   --self_mode, -s       Set self mode that only owner and the bot can use.
	   --json, -j            Use JSON DB to store data of the WhatsApp connection.
	   --help, -h            Show this message.

	 Examples
	   $ node . --read_only -t`;

export const parseCli = () =>
	meow(help(), {
		importMeta: import.meta,
		flags: {
			/* eslint-disable */
			restrict: { type: 'boolean', alias: 'e' },
			self_mode: { type: 'boolean', alias: 's' },
			help: { type: 'boolean', alias: 'h' },
			prefix: { type: 'string', alias: 'p' },
			json: { type: 'boolean', alias: 'j' },
			/* eslint-enable */
		},
	});

export const clearDatabaseConnection = async () => {
	const data = await fs.readJson(`./media_files/connection_databases/${config.cli.input[0] ?? 'session-debug'}.json`);
	const session = await fs.readJson(`./session/${config.cli.input[0] ?? 'session-debug'}.json`);

	session.keys = {};
	data.chats = [];
	data.contacts = {};
	data.messages = {};

	await fs.writeJson(`./media_files/connection_databases/${config.cli.input[0] ?? 'session-debug'}.json`, data);
	await fs.writeJson(`./session/${config.cli.input[0] ?? 'session-debug'}.json`);
};
