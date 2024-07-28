ARG VARIANT=1-20-bullseye
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}

ARG USERNAME=node

#RUN mkdir -p /workspace chown -R $USERNAME /workspace

RUN mkdir -p /home/$USERNAME/.vscode-server/extensions \
    && chown -R $USERNAME \
    /home/$USERNAME/.vscode-server

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/home/$USERNAME/commandhistory/.bash_history" \
    && mkdir /home/$USERNAME/commandhistory \
    && touch /home/$USERNAME/commandhistory/.bash_history \
    && chown -R $USERNAME /home/$USERNAME/commandhistory \
    && echo "$SNIPPET" >> "/home/$USERNAME/.bashrc"
