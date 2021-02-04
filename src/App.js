import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '5c6613aa-7607-4649-ab39-12f54d24a5ff';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height='100vh'
			projectID={projectID}
			userName={localStorage.getItem('username')}
      		userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
	);
}

export default App