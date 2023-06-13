/** 使用 requestAnimationFrame 模拟 setInterval， setInterval会一直执行，requestAnimationFrame浏览器会优化 */

export  const interval = (fn: () => void, time: number) => {
  // 记录上一次函数调用的时间
  let lastTime = performance.now();
  // 用于存储 requestAnimationFrame 返回的 ID 或 setInterval 返回的 ID
  let requestId: number;
  let cancel = () => {};

  // 如果浏览器支持 requestAnimationFrame，使用 requestAnimationFrame 实现循环调用
  if ('requestAnimationFrame' in window) {
    // eslint-disable-next-line no-inner-declarations
    const loop: FrameRequestCallback = (now) => {
      const deltaTime = now - lastTime;
      if (deltaTime >= time) {
        fn();
        lastTime = now;
      }
      requestId = requestAnimationFrame(loop);
    };
    requestId = requestAnimationFrame(loop);
    // 定义 cancel 方法，用于取消 requestAnimationFrame 的递归调用
    cancel = () => {
      cancelAnimationFrame(requestId);
    };
  } else {
    // 否则，使用 setInterval 实现循环调用
    requestId = setInterval(fn, time) as unknown as number;
    // 定义 cancel 方法，用于取消 setInterval 的调用
    cancel = () => {
      clearInterval(requestId);
    };
  }

  // 返回包含 cancel 方法的对象
  return { cancel };
}

// 访问剪切板 复制
export const copyToClipboard = (text: string) => {
  new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => resolve('复制成功'))
        .catch(() => reject('剪切板不可用'));
    } else {
      try {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        textarea.value = text;
        textarea.select();
        document.execCommand('copy', true);
        document.body.removeChild(textarea);
        resolve('复制成功');
      } catch (error) {
        reject('剪切板不可用');
      }
    }
  });
};

/** 去掉 Url 的域名 */
export const cleanFileUrl = (url: string) => url?.replace(/https?:\/\/.+?(?=\/)/, '');

// 普通文件下载
export const downloadFile = (url:string, title:string) => {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', title);
  a.click();
};


export type DelNulOp = <T>(source:Record<string,T>)=>Record<string,T>
export const   delNulOp:DelNulOp = (source) =>{
  if (typeof source !== 'object') {
    return source;
  }
  if (Array.isArray(source)) {
    return source;
  }
  const target = { ...source };
  Object.keys(target).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(target, key) || target[key] === '' || target[key] === undefined || target[key] === null) {
      delete target[key];
    }
  });
  return target;
};
