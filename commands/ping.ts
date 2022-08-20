import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with Pong!',
    testOnly: true,
    slash: true,
    callback: ({ interaction }) => {
        interaction.reply({
            content: 'Pong!',
            ephemeral: false,
        })
    }
} as ICommand