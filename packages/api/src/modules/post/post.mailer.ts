import * as Sentry from "@sentry/node"
import { Service } from "typedi"

import { DLC_EMAIL, Mailer } from "../../lib/mailer"

@Service()
export class PostMailer extends Mailer {
  sendSuggestedPost(title: string, deviceId: string) {
    try {
      return this.send({
        templateId: "d-c33ce68972604e0d9ca5e7732c771926",
        to: DLC_EMAIL,
        variables: {
          subject: "FUIP - new suggestion",
          text: `
						deviceId: ${deviceId}
						<br>
						name: ${title}
					`,
        },
      })
    } catch (error) {
      Sentry.captureException(error)
    }
  }
}
