import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from '@arco-design/web-react';
import AiChatCard from '../components/AiChatCard/chatCard'
import ChildChatCard from '../components/ChildChatCard/chatCard'
import Input from '../components/Input';
import { IconLeft } from '@arco-design/web-react/icon';
import CloseComponent from '../components/CloseComponent/close.jsx';
import bg_chat from '../assets/AI学习-背景.png'
import request from '../utils/request';
import './Chat.less'
//节流
function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}



function Chat() {
  // 左滑返回Home
  // const history = useHistory();
  // const handleGoBack = () => {
  //   history.goBack();
  // };
  useEffect(() => {
    scrollToBottom()
    init()
  }, []);
  const [chatMessages, setChatMessages] = useState([
    {
      usr: 'GPT', message: <>
        <div>你好！欢迎来到袋鼠口袋AI辅导课堂！🦘🎉</div>
        <div>现在，让我们先了解一下你的学习偏好。</div>
        <div> 你当前的设置为：</div>
        <li>🎯年级：暂未设置</li>
        <li>🌐语言：中文（默认）</li>
        <div>为了更好地为你提供帮助，请告诉我你所希望学习的年级（1-10）：</div>
      </>,
    },
    { usr: '王小兴', message: '3',  },
    {
      usr: 'GPT', message: <>
        <div>谢谢你的回复！现在我已经知道你想要学习的年级为小学三年级了。</div>
        <div>你当前的设置为：</div>
        <li>🎯年级：小学三年级</li>
        <li>🌐语言：中文</li>
        <div>接下来，我会为你制定一个适合小学三年级的学习计划。请说“/创建学习计划”，然后我会开始为你制定学习计划。</div>
      </>,
    },
    { usr: '王小兴', message: '创建学习计划', },
    {
      usr: 'GPT', message: <>
        <div>好的，我将为你制定一个适合小学三年级的学习计划。请注意，我将按照小学三年级的课程标准来教授，使用中文作为教学语言。</div>
        <div>假设：既然你是小学三年级的学生，我猜想你已经掌握了以下知识点：</div>
        <li>基本的加减法运算</li>
        <li>100以内的数的认识和排序</li>
        <li>常见的生活用语和简单的阅读理解</li>
        <br></br>
        <div>针对小学三年级的学生，我们的学习计划如下：</div>
        <li>理解分数的基本概念和表示法</li>
        <li>阅读理解练习</li>
        <li>探索科学知识，了解物体的性质和分类</li>

        <div>请说“/开始”来开始这个学习计划。</div>
      </>
    },

    { usr: '王小兴', message: '开始' },
    {
      usr: 'GPT', message: <>
        <div>1.好的，我们从第一部分开始：理解分数的基本概念和表示法。😄🧮📚</div>
        <li>分数是用来表示部分的一种数学表达方式。一个分数由两部分组成：分子（numerator）和分母（denominator）。分子表示我们要表示的部分，而分母表示总共有多少个相同的部分。我们用分子和分母之间的一条横线来表示分数，如：1/2、3/4 等。</li>
        <li>举个例子🍉：</li>
        <div>想象一下，你有一整个西瓜，你把它切成了4等份。你拿走了其中的1份。这时，你拿走的这一份可以用分数表示为 1/4（读作：四分之一）。</div>
        <div>现在，让我们看一个练习题来巩固刚才学到的知识：</div>
        <div>设有一个矩形，它被切成了8等份，其中有3份被涂上了红色。请用分数表示这个矩形的红色部分。</div>
        <li>完成这个练习后，请告诉我答案。然后，我们将继续下一部分。如需帮助，请随时告诉我！😊🧮📚</li>
      </>
    },
    { usr: '王小兴', message: '3/8' },
    {
      usr: 'GPT', message: <>
        <li>太棒了！😄🎉 你的答案是正确的！</li>
        <div>小燕子从遥远的南方飞回来。</div>
        <div>小燕子在王老师家的阳台上筑巢。</div>
        <div>王老师家的阳台上孵出了五个小燕子。</div>
        <div>请将你的答案写在一行上，用空格隔开。例如：“答案1 答案2 答案3”。</div>
        <div>完成后，请输入你的答案。如果你需要帮助，请随时输入“/帮助”。</div>
      </>
    },
    { usr: '王小兴', message: '南方 王老师家的阳台 5个' },
    {
      usr: 'GPT', message: <>
      <div>恭喜你，回答正确！</div>
      <div>植物的生命周期从种子开始。</div>
      <div>发芽的种子需要吸收水分来破壳。</div>
      <div>植物的生命周期分为种子发芽、幼苗生长、成熟植株、结果与种子成熟、种子传播等阶段。</div>
      <div>现在，我们已经学习了小学三年级的科学课程。如果你还有其他问题或需要帮助，请告诉我。</div>
      </>
    },
    { usr: '王小兴', message: '种子 水 根、茎、叶' },
    {
      usr: 'GPT', message: <>
      <div>你的回答部分正确。以下是完整的答案：</div>
      <div>植物的生命周期从种子开始。</div>
      <div>发芽的种子需要吸收水分来破壳。</div>
      <div>植物的生命周期有以下几个阶段：种子发芽、幼苗生长、成熟植株、结果与种子成熟、种子传播。</div>
      <div>请再次阅读植物生命周期的阶段，确保你对这个主题有更深入的了解。然后，你可以输入“/继续”来进行下一步学习，或者输入“/测验”来测试你的植物生命周期知识掌握情况。</div>      </>
    },
    { usr: '王小兴', message: '我想学些英语' },
    {
      usr: 'GPT', message: <>
      <div>当然可以！学习英语是一个非常有益的技能。让我们从基本的英语语法开始。</div>
      <div>英语句子的基本结构是主语（Subject）+ 谓语（Predicate）。谓语通常由动词（Verb）构成，它描述主语正在进行或已完成的动作。</div>
      <div>例如：</div>
      <div>The cat (主语) sleeps (谓语)。意思是“猫在睡觉。”</div>
      <div>She (主语) reads (谓语) a book。意思是“她在读书。”</div>
      <div>现在，让我们学习一些基本的英语词汇和短语：</div>
      <div>问候语：</div>
      <div>Hello：你好</div>
      <div>Good morning：早上好</div>
      <div>Good afternoon：下午好</div>
      <div>Good evening：晚上好</div>
      <div>Goodbye：再见</div>
      <div>常用短语：</div>
      <div>Thank you：谢谢</div>
      <div>You're welcome：不客气</div>
      <div>Please：请</div>
      <div>Excuse me：对不起（用于引起注意或道歉）</div>
      <div>Sorry：抱歉</div>
      <div>询问：</div>
      <div>What is this?：这是什么？</div>
      <div>How are you?：你好吗？</div>
      <div>What's your name?：你叫什么名字？</div>
      <div>Where are you from?：你来自哪里？</div>
      <div>请尝试使用这些词汇和短语制作简单的英语句子。如果你需要进一步的帮助或想了解更多关于英语学习的信息，请随时提问。</div>
      </>
    },
  



  ]);
  const [newChatMessage, setNewChatMessage] = useState([]);
  
  function init() {
    addNullGPTChatCard()
    ChangeLastGPTChatCard(
      [
        ['div', '欢迎来到袋鼠口袋AI辅导课堂！🦘🎉'],
        ['div', '你可以：'],
        ['a', '1. 学些新知识，然后告诉爸爸妈妈', '学些新知识，然后告诉爸爸妈妈'],
        ['a', '2. 温故而知新，看看最近的学习成果吧', '温故而知新，看看最近的学习成果吧'],
        ['div',' ']
      ]
      )
  }

  function scrollToBottom() {
    //节流
    throttle(() => {
      const chatContainer = document.getElementById('chatContainer');
      chatContainer.scrollTop = chatContainer?.scrollHeight;
    }, 1000)()
  }
  function addChildChatCard(message) {
    //屏幕向上滚动
    scrollToBottom()
    const newChatCard = { usr: '王小兴', message: message };
    setNewChatMessage(prevMessages => [...prevMessages, newChatCard]);
  }
  function addNullGPTChatCard() {
    
    const newChatCard = { usr: 'GPT', message: '...' };
    setNewChatMessage(prevMessages => [...prevMessages, newChatCard]);
  }
  const aStyle = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  }
  async function clickLink(link) {
    //前端新增一个孩子消息
    addChildChatCard(link)
    //向后端请求数据
    const formData = new FormData();
    formData.append('content', link);
    addNullGPTChatCard()
    let res = await request(formData,'getChatReply')
    //新增一个chat回复
    ChangeLastGPTChatCard(res.data)

    

  }
  async function ChangeLastGPTChatCard(message) {
    if (typeof message === 'string') {
      [...message].forEach((item, index) => {
        setTimeout(() => {
          scrollToBottom();
          const newChatCard = { usr: 'GPT', message: message.slice(0, index + 1) };
          setNewChatMessage(prevMessages => [...prevMessages.slice(0, prevMessages.length - 1), newChatCard]);
        }, 50 * index);
      });
    } else if (typeof message === 'object' && message !== null) {
      const preMessage = []
      //向preMessage中增添新元素

      for (const child of message) {
        //js向newMessage中添加一个新div
        const [tag,text,link=''] = child
        
        if (tag=='div') {
          for (const idx in text) {
            await new Promise(resolve => {
              setTimeout(() => {
                scrollToBottom();
                const newChatCard = {
                  usr: 'GPT', message: <>
                    {...preMessage}
                    <div>{text.slice(0,idx+1)}</div>
                  </>
                };
                setNewChatMessage(prevMessages => [...prevMessages.slice(0, prevMessages.length - 1), newChatCard]);
                resolve()
              }, 150);
            })
          }
        } else if (tag == 'a') {
          for (const idx in text) {
            await new Promise(resolve => {
              setTimeout(() => {
                scrollToBottom();
                const newChatCard = {
                  usr: 'GPT', message: <>
                    {...preMessage}
                    <div><a style={aStyle}>{text.slice(0,idx+1)}</a></div>
                  </>
                };
                setNewChatMessage(prevMessages => [...prevMessages.slice(0, prevMessages.length - 1), newChatCard]);
                resolve()
              }, 10);
            })
          }
        }
        if (tag == 'div') {
          preMessage.push(<div>{text}</div>)
        }else if (tag == 'a') {
          preMessage.push(<div><a onClick={() => { clickLink(link) }} style={aStyle}>{text}</a></div>)
        }
          
      }
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative',backgroundImage:`url(${bg_chat})` }}>
      <CloseComponent/>
      <div id='chatContainer' style={{ width:'100%',height:'80%',overflowY:'scroll',marginTop:'100px'}}>
        
        {chatMessages.map((message, index) => (
        message.usr === 'GPT' ? <AiChatCard key={index} usr={message.usr} message={message.message} color={message.color} /> :
                            <ChildChatCard key={index} usr={message.usr} message={message.message} color={message.color} />
        ))}

        <div style={{  width: '230px', margin: 'auto', left: 0, right: 0 }}>
          <Divider orientation={'center'}>2023/05/26</Divider>
        </div>


        {newChatMessage.map((message, index) => (
        message.usr === 'GPT' ? <AiChatCard key={index} usr={message.usr} message={message.message} color={message.color} /> :
                            <ChildChatCard key={index} usr={message.usr} message={message.message} color={message.color} />
        ))}

        
        <div style={{height:200}}></div>
      </div>
      <div >
        {/* <Input style={{ maxWidth: 350 }} allowClear placeholder="Please Enter something" /> */}
        <Input callback1={addChildChatCard} callback2={addNullGPTChatCard} callback3={ChangeLastGPTChatCard}    ></Input>
      </div>

    </div>
    
  );
}

export default Chat;