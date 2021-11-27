const encodeBoard = (board: any) =>
    board.reduce(
        (result: any, row: any, i: any) =>
            result +
            `%5B${encodeURIComponent(row)}%5D${
                i === board.length - 1 ? '' : '%2C'
            }`,
        ''
    );
const encodeParams = (params: any) =>
    Object.keys(params)
        .map((key) => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

export default encodeParams;
