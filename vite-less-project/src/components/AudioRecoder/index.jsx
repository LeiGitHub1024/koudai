import React, { useState ,useEffect} from 'react';
import request from '../../utils/request';
const AudioRecorder = (props) => {
  const {recordHook} = props
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (audioBlob) {
      saveRecording();
    }
  }, [audioBlob]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.addEventListener('dataavailable', function (e) {
        chunks.push(e.data);
      });

      recorder.addEventListener('stop', function () {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
      });

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error('无法访问音频设备或用户未授权：', err);
    }
  };

  const stopRecording = async() => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
      saveRecording()
    }
  };

  const saveRecording = async () => {
    if (audioBlob) {
      //获取当前时间戳
      const timestamp = Date.parse(new Date());
      console.log('保存音频:', 'audio' + timestamp, audioBlob);
      localStorage.setItem('audio' + timestamp, audioBlob);
      const formData = new FormData();
      formData.append('user_id', 1);
      formData.append('audio_file', audioBlob);
      await request(formData, 'addMessage')
      recordHook()
      setAudioBlob(null)
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? '停止录音' : '开始录音'}
      </button>
      {/* <button onClick={saveRecording} disabled={!audioBlob}>
        保存录音
      </button> */}

      {/* {audioBlob && (
        <audio style={{display:'none'}}  controls src={URL.createObjectURL(audioBlob)} />
      )} */}
    </div>
  );
};

export default AudioRecorder;
