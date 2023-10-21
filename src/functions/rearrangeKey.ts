  // 選択されたキーが最初になるよう並び替える関数
  const rearrangeKey = (arr: Array<string>, index: string): Array<string> =>  {
    let arrKey = arr.concat();
    let splicesKey = arrKey.splice(0, parseInt(index));
    let concatsKey = arrKey.concat(splicesKey);
    let rearrangeArr = [];
    rearrangeArr.push(concatsKey[0] + "△7");
    rearrangeArr.push(concatsKey[2] + "m7");
    rearrangeArr.push(concatsKey[4] + "m7");
    rearrangeArr.push(concatsKey[5] + "△7");
    rearrangeArr.push(concatsKey[7] + "7");
    rearrangeArr.push(concatsKey[9] + "m7");
    rearrangeArr.push(concatsKey[11] + "m7(♭5)");
    return rearrangeArr;
  }

  export default rearrangeKey;