describe('Tests BSTree', () => {
    describe('push', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return 0 when init value = undefined', function () {
            const value = undefined;
            const expected = 0;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init value = null', function () {
            const value = null;
            const expected = 0;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 1 when init value = -14', function () {
            const value = -14;
            const expected = 1;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 1 when init value = 10', function () {
            const value = 10;
            const expected = 1;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 2 when init value = 3 and array = [1]', function () {
            bTree.init([1]);
            const value = 3;
            const expected = 2;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 3 when init value = 6 and array = [1, 2]', function () {
            bTree.init([1, 2]);
            const value = 6;
            const expected = 3;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 6 when init value = 8 and array = [1, 2, 3, 5, 6]', function () {
            bTree.init([1, 2, 3, 5, 6]);
            const value = 8;
            const expected = 6;

            const actual = bTree.push(value);

            assert.strictEqual(actual, expected);
        });
    });

    describe('init', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return 0 when init array = undefined', function () {
            const value = undefined;
            const expected = 0;

            const actual = bTree.init(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = null', function () {
            const value = null;
            const expected = 0;

            const actual = bTree.init(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = []', function () {
            const value = [];
            const expected = 0;

            const actual = bTree.init(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 1 when init array = [1]', function () {
            const value = [1];
            const expected = 1;

            const actual = bTree.init(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = [1, 2]', function () {
            const value = [1, 2];
            const expected = 2;

            const actual = bTree.init(value);

            assert.strictEqual(actual, expected);
        });

        it('should return 5 when init array = [1, 2, 3, 5, 6]', function () {
            const value = [1, 2, 3, 5, 6];
            const expected = 5;

            const actual = bTree.init(value);

            assert.strictEqual(actual, expected);
        });
    });

    describe('toString', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return "" when init array = undefined', function () {
            bTree.init(undefined);
            const expected = "";

            const actual = bTree.toString();

            assert.strictEqual(actual, expected);
        });

        it('should return "" when init array = null', function () {
            bTree.init(null);
            const expected = "";

            const actual = bTree.toString();

            assert.strictEqual(actual, expected);
        });

        it('should return "" when init array = []', function () {
            bTree.init([]);
            const expected = "";

            const actual = bTree.toString();

            assert.strictEqual(actual, expected);
        });

        it('should return "1" when init array = [1]', function () {
            bTree.init([1]);
            const expected = '1 ';

            const actual = bTree.toString();

            assert.strictEqual(actual, expected);
        });

        it('should return "1 2" when init array = [1, 2]', function () {
            bTree.init([1, 2]);
            const expected = '1 2 ';

            const actual = bTree.toString();

            assert.strictEqual(actual, expected);
        });

        it('should return "1 2 3 4 5" when init array = [1, 2, 3, 4, 5]', function () {
            bTree.init([1, 2, 3, 4, 5]);
            const expected = '1 2 3 4 5 ';

            const actual = bTree.toString();

            assert.strictEqual(actual, expected);
        });

    });

    describe('toArray', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return [] when init array = undefined', function () {
            bTree.init(undefined);
            const expected = [];

            const actual = bTree.toArray();

            assert.deepEqual(actual, expected);
        });

        it('should return [] when init array = null', function () {
            bTree.init(null);
            const expected = [];

            const actual = bTree.toArray();

            assert.deepEqual(actual, expected);
        });

        it('should return [] when init array = []', function () {
            bTree.init([]);
            const expected = [];

            const actual = bTree.toArray();

            assert.deepEqual(actual, expected);
        });

        it('should return [1] when init array = [1]', function () {
            bTree.init([1]);
            const expected = [1];

            const actual = bTree.toArray();

            assert.deepEqual(actual, expected);
        });

        it('should return [1, 2] when init array = [1, 2]', function () {
            bTree.init([1, 2]);
            const expected = [1, 2];

            const actual = bTree.toArray();

            assert.deepEqual(actual, expected);
        });

        it('should return [1, 2, 3, 4, 5] when init array = [1, 2, 3, 4, 5]', function () {
            bTree.init([1, 2, 3, 4, 5]);
            const expected = [1, 2, 3, 4, 5];

            const actual = bTree.toArray();

            assert.deepEqual(actual, expected);
        });
    });

    describe('remove', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return 0 when init array = undefined and value = undefined', function () {
            bTree.init(undefined);
            const value = undefined;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = null and value = null', function () {
            bTree.init(null);
            const value = null;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = undefined and value = 2', function () {
            bTree.init(undefined);
            const value = 2;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = null and value = 5', function () {
            bTree.init(null);
            const value = 5;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = [] and value = 2', function () {
            bTree.init([]);
            const value = 2;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = null and value = undefined', function () {
            bTree.init([]);
            const value = undefined;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = null and value = null', function () {
            bTree.init([]);
            const value = null;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 0 when init array = [1] and value = 1', function () {
            bTree.init([1]);
            const value = 1;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 1 when init array = [1, 6] and value = 6', function () {
            bTree.init([1, 6]);
            const value = 6;
            const expected = 1;
            const size = 1;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 6 when init array = [1, 6, 3, 4, 8, 9, 3] and value = 3', function () {
            bTree.init([1, 6, 3, 4, 8, 9, 3]);
            const value = 3;
            const expected = 6;
            const size = 6;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('should return 7 when init array = [1, 6, 3, 4, 8, 9, 3] and value = 12', function () {
            bTree.init([1, 6, 3, 4, 8, 9, 3]);
            const value = 12;
            const expected = 7;
            const size = 7;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });
    });

    describe('setBalance', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return null when init array = undefined', function () {
            bTree.init(undefined);
            const expected = null;

            const actual = bTree.setBalance();

            assert.strictEqual(actual, expected);
        });

        it('should return null when init array = null', function () {
            bTree.init(null);
            const expected = null;

            const actual = bTree.setBalance();

            assert.strictEqual(actual, expected);
        });

        it('should return null when init array = []', function () {
            bTree.init([]);
            const expected = null;

            const actual = bTree.setBalance();

            assert.strictEqual(actual, expected);
        });

        it('should return { value: 1, right: null, left: null } when init array = [1]', function () {
            bTree.init([1]);
            const expected = { value: 1, right: null, left: null };

            const actual = bTree.setBalance();

            assert.deepEqual(actual, expected);
        });

        it('should return {value: 5, left: Node, right: Node} when init array = [1, 5, 2, 6, 8, -1, 7]', function () {
            bTree.init([1, 5, 2, 6, 8, -1, 7]);
            const expected = {value: 5, left: {value: 1, right: {value: 2, right: null, left: null}, left: {value: -1, right: null, left: null}}, right: {value: 7, right: {value: 8, right: null, left: null}, left: {value: 6, right: null, left: null}}};

            const actual = bTree.setBalance();

            assert.deepEqual(actual, expected);
        });
    });
    
    describe('getSize', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return 0 when init array = undefined', function () {
            bTree.init(undefined);
            const expected = 0;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = null', function () {
            bTree.init(null);
            const expected = 0;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = []', function () {
            bTree.init([]);
            const expected = 0;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 1 when init array = [2]', function () {
            bTree.init([2]);
            const expected = 1;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 2 when init value = 3 and array = [1]', function () {
            bTree.init([1]);
            bTree.push(3);
            const expected = 2;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 3 when init value = 6 and array = [1, 2]', function () {
            bTree.init([1, 2]);
            bTree.push(6);
            const expected = 3;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 6 when init value = 8 and array = [1, 2, 3, 5, 6]', function () {
            bTree.init([1, 2, 3, 5, 6]);
            bTree.push(8);
            const expected = 6;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 4 when init array = [1, 2, 3, 5, 6] and remove value = 5', function () {
            bTree.init([1, 2, 3, 5, 6]);
            bTree.remove(5);
            const expected = 4;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });
    });

    describe('getSize', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return 0 when init array = undefined', function () {
            bTree.init(undefined);
            const expected = 0;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = null', function () {
            bTree.init(null);
            const expected = 0;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 0 when init array = []', function () {
            bTree.init([]);
            const expected = 0;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 1 when init array = [2]', function () {
            bTree.init([2]);
            const expected = 1;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 2 when init value = 3 and array = [1]', function () {
            bTree.init([1]);
            bTree.push(3);
            const expected = 2;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 3 when init value = 6 and array = [1, 2]', function () {
            bTree.init([1, 2]);
            bTree.push(6);
            const expected = 3;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 6 when init value = 8 and array = [1, 2, 3, 5, 6]', function () {
            bTree.init([1, 2, 3, 5, 6]);
            bTree.push(8);
            const expected = 6;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });

        it('should return 4 when init array = [1, 2, 3, 5, 6] and remove value = 5', function () {
            bTree.init([1, 2, 3, 5, 6]);
            bTree.remove(5);
            const expected = 4;

            const actual = bTree.getSize();

            assert.strictEqual(actual, expected);
        });
    });

    describe('get', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BSTree();
        });

        it('should return undefined when init array = undefined and value = undefined', function () {
            bTree.init(undefined);
            const value = undefined;
            const expected = undefined;

            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);
        });

        it('should return undefined when init array = null and value = null', function () {
            bTree.init(null);
            const value = null;
            const expected = undefined;

            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);
        });

        it('should return undefined when init array = undefined and value = 2', function () {
            bTree.init(undefined);
            const value = 2;
            const expected = undefined;

            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);
        });

        it('should return undefined when init array = null and value = 5', function () {
            bTree.init(null);
            const value = 5;
            const expected = undefined;

            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);
        });

        it('should return undefined when init array = [] and value = 2', function () {
            bTree.init([]);
            const value = 2;
            const expected = undefined;

            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);

        });

        it('should return undefined when init array = [] and value = undefined', function () {
            bTree.init([]);
            const value = undefined;
            const expected = undefined;


            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);
        });

        it('should return undefined when init array = null and value = null', function () {
            bTree.init([]);
            const value = null;
            const expected = undefined;

            const actual = bTree.get(value);

            assert.strictEqual(actual, expected);
        });

        it('should return {value: 1, left: null, right: null} when init array = [1] and value = 1', function () {
            bTree.init([1]);
            const value = 1;
            const expected = {value: 1, left: null, right: null};

            const actual = bTree.get(value);

            assert.deepEqual(actual, expected);
        });

        it('should return {value: 1, left: null, right: {value: 6, left: null, right: null}} when init array = [1, 6] and value = 1', function () {
            bTree.init([1, 6]);
            const value = 1;
            const expected = {value: 1, left: null, right: {value: 6, left: null, right: null}};

            const actual = bTree.get(value);

            assert.deepEqual(actual, expected);
        });

        it('should return {value: 6, left: null, right: null} when init array = [1, 6] and value = 6', function () {
            bTree.init([1, 6]);
            const value = 6;
            const expected = {value: 6, left: null, right: null};

            const actual = bTree.get(value);

            assert.deepEqual(actual, expected);
        });

        it('should return {value: 2, left: null, right: null} when init array = [10,5,14,3,6,12,16,2,8] and value = 2', function () {
            bTree.init([10,5,14,3,6,12,16,2,8]);
            const value = 2;
            const expected = {value: 2, left: null, right: null};

            const actual = bTree.get(value);

            assert.deepEqual(actual, expected);
        });

        it('should return {value: 3, left: {value: 2, left: null, right: null}, right: null} when init array = [10,5,14,3,6,12,16,2,8] and value = 3', function () {
            bTree.init([10,5,14,3,6,12,16,2,8]);
            const value = 3;
            const expected = {value: 3, left: {value: 2, left: null, right: null}, right: null};

            const actual = bTree.get(value);

            assert.deepEqual(actual, expected);
        });

        it('should return {value: 14, left: {value: 12, left: null, right: null}, right: {value: 16, left: null, right: null}} when init array = [10,5,14,3,6,12,16,2,8] and value = 14', function () {
            bTree.init([10,5,14,3,6,12,16,2,8]);
            const value = 14;
            const expected = {value: 14, left: {value: 12, left: null, right: null}, right: {value: 16, left: null, right: null}};

            const actual = bTree.get(value);

            assert.deepEqual(actual, expected);
        });
    });
});