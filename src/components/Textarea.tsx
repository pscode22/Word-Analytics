import { Dispatch, SetStateAction, useState } from 'react';
import Warning from './Warning';
import { TStats } from '@/types';
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from '@/lib/constant';

export default function Textarea({ setStats }: { setStats: Dispatch<SetStateAction<TStats>> }) {
  const [text, setText] = useState<string>('');
  const [warningText, setWarningText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // extract text from event
    let text = e.target.value;

    // Input validation
    if (text.includes('<script>')) {
      setWarningText("You can't use <script> in your text.");
      text = text.replace('<script>', '');
    } else {
      setWarningText('');
    }

    // set text
    setText(text);

    // set stats
    setStats({
      numberOfWords: text.split(' ')[0] === '' ? 0 : text.split(' ').length,
      numberOfCharacters: text.length,
      instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
      facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    });
  };

  return (
    <div className="textarea">
      <textarea value={text} onChange={handleChange} placeholder="Enter your text" spellCheck={false} />
      <Warning warningText={warningText} />
    </div>
  );
}
