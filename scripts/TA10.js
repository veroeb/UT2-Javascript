const getSum = (nums) => {
    console.log(nums.reduce((acc, num) => acc + num, 0));
};

const getSum1 = (nums) => console.log(nums.reduce((acc, num) => acc + num, 0));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getSum1(array);