const duplicates = (nums) => {
    console.log(nums.filter((num, index) => nums.indexOf(num) != index).length);
};

const duplicates1 = (nums) => console.log(nums.filter((num, index) => nums.indexOf(num) != index).length);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
duplicates1(array);