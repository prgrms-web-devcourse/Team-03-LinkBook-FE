import { useState, useEffect } from 'react';
import Text from '../../../Text';

interface Props {
  mm: number;
  ss: number;
}

const Timer = ({ mm, ss }: Props) => {
  const [minute, setMinute] = useState(mm);
  const [second, setSecond] = useState(ss);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
      if (second === 0) {
        if (minute === 0) {
          alert('제한 시간을 초과하셨습니다. 재전송 버튼을 눌러주세요');
          clearInterval(timerId);
        } else {
          setMinute(minute - 1);
          setSecond(59);
        }
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [minute, second]);

  return (
    <div style={{ paddingRight: 10, color: 'red' }}>
      <Text>
        {minute}:{second < 10 ? `0${second}` : second}
      </Text>
    </div>
  );
};

export default Timer;
