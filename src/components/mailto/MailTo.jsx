import React from 'react';
import ReactDOM from 'react-dom';

function MailTo({ email, subject, body, ...props }) {
	return (
		<a
			style={{ textDecoration: 'none' }}
			href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
			target="_blank"
		>
			{props.children}
		</a>
	);
}

export default MailTo;
