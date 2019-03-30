from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import os

def setup():
    chatbot = ChatBot('Bot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    trainer='chatterbot.trainers.ListTrainer')
    for file in os.listdir('data/'):
        convData = open(r'data/' + file,encoding='latin-1').readlines()
        trainer = ListTrainer(chatbot)
        trainer.train(convData)
setup()