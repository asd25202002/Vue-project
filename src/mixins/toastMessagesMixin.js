import emitter from '@/methods/emitter';

export default function emitterMsg(res, title = '更新', msg = '') {
  if (res.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
      content: msg,
    });
  } else {
    const message = typeof res.data.message === 'string'
      ? [res.data.message] : res.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
