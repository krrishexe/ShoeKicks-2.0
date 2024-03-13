FROM node:16-alpine
WORKDIR /server/

COPY controllers/ /server/controllers
COPY models/ /server/models
COPY routes/ /server/routes
COPY utils/ /server/utils
COPY middlewares/ /server/middlewares
COPY db/ /server/db
COPY app.js /server/
COPY package*.json /server/

ENV DB_CONNECTION=mongodb+srv://krish:1212@cluster0.liofgxs.mongodb.net/
ENV VERIFY_TOKEN_SECRET=krish123
ENV ACCESS_TOKEN_SECRET=krish123
ENV REFRESH_TOKEN_SECRET=krish123

ENV STRIPE_KEY=sk_test_51OssNiSA8M310S6LyQ0m3UWqFEjJXmf0otLRQ3KB6jso7YhyWXk0Rwrcf5adaSnYjM8Sz00TJDzLBAJ3IoVTp49m000g3OWPKf
ENV CLIENT_ID=855474174431-7dsnhf27st2vr6afm4e0b8aobd6irn4h.apps.googleusercontent.com
ENV CLIENT_SECRET=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
ENV REDIRECT_URI=https://developers.google.com/oauthplayground
ENV REFRESH_TOKEN=1//04hlobWGt0wtQCgYIARAAGAQSNwF-L9IrfwmihEBTyKnAaJR3A1QlH4jGsIhzOVCt57NEsnnwftR7O2Qg128EWJWf4XQ2BbPG1gs
ENV ACCESS_TOKEN=ya29.a0Ad52N3_zW_2BJOUAxfuoqXjs6NQ2dC5WccAPHZKvuH-ZIrQnUpSgxezBSvgPOH_dDW97Z9P1G6kZkMvSeycRUX-005axBoAb6Bak2lwKFVBXk5xDSUKkD4MMLgCQvE8dp3H2oKa1lf5xwkJKztFCpeEnN24UVMKu4CE5aCgYKAW4SARESFQHGX2Mi4fzE3Z8MrO_15NfnqQZSZg0171





RUN npm install --force

CMD [ "npm", "run", "dev"]