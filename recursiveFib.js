  // recursive version
  const fibsRec = (num, sequence = [0, 1]) => {
    if (sequence.length >= num) {
      return sequence.slice(0, num);
    }
  
    const newNumber = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNumber);
    return fibsRec(num, sequence);
  }

    
  console.log(fibsRec(0)); // []
  console.log(fibsRec(1)); // [0]
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]