// Dependencies
import React, {useState} from 'react';
// @ts-ignore
import { ChatEngine, ChatFeed, ChatSettings } from 'react-chat-engine';

// Components
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import Message from './Message';
import { ChatInput } from './ChatInput';

// Export component
export const Chat = () => {
  const [showSettingsBar, setShowSettingsBar] = useState(false);
  
  return (
    <div className={'h-full relative'}>
      <div className={'container h-full flex pt-[25px] pb-4'}>
        <ChatEngine
          projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
          userName={process.env.REACT_APP_CHAT_USERNAME}
          userSecret={process.env.REACT_APP_CHAT_SECRET}
          renderChatHeader={() => <ChatHeader onClickSettings={() => setShowSettingsBar(true)} />}
          renderChatFeed={(props: any) => (
            <div className={'flex-1 ml-[18px] h-full bg-white rounded-[25px] card-shadow relative overflow-hidden'}>
              <ChatFeed {...props} />
            </div>
          )}
          renderChatList={(chatEngineState: any) => <ChatList {...chatEngineState} />}
          renderMessageBubble={(creds: any, chat: any, lastMessage: any, message: any, nextMessage: any) => <Message creds={creds} chat={chat} lastMessage={lastMessage} message={message} nextMessage={nextMessage} />}
          renderNewMessageForm={ChatInput}
          renderChatSettings={(chatAppState: any) => (
            <div className={`h-full transition-all duration-500 w-[360px] ${showSettingsBar ? 'mr-0' : '-mr-[360px]'}`}>
              <button className="left-2 top-2 absolute" onClick={() => setShowSettingsBar(false)}>
                <img className="w-[47px] h-[47px]" src={'/images/icons/collapse-right-icon.svg'} alt={'settings icon'} />
              </button>
              <ChatSettings {...chatAppState} />
            </div>
          )}
          renderIsTyping={(typers: any) => {console.log(typers)}}
        />
      </div>
    </div>
  );
};
