const getOdds = (nums) => {
    console.log(nums.filter((num) => num % 2 != 0));
};

const getOdds1 = (nums) => console.log(nums.filter((num) => num % 2 != 0));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getOdds1(array);