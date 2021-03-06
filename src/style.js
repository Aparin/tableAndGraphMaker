var css = `
/* ---------- table ---------- */

.table {
    width: 300px;
    margin: 0 auto;
}

.cell {
    float: left;
    padding: 3px;
    border: 1px dotted lightgrey;
    width: 90px;
    text-align: center;
}

.clear {
    clear: both;
}


/* ---------- graph ---------- */

.graph {
    width: 100%;
    margin: 10px 0px;
    border-left: 2px dotted gray;
    border-bottom: 2px dotted gray;
    padding-bottom: 10px;
    padding-left: 5px;
}

.value,
.year {
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 14px;
    padding-bottom: 4px;
}

.valueVertical {
    transform: rotate(-90deg);
    transform-origin: left top;
    position: relative;
    margin-bottom: -20px;
    margin-left: -5px;
    color: gray;
}

.year {
    display: block;
    background: lightgray;
    width: 92%;
    margin: 4px 2% 4px 2%;
    padding: 2%;
    padding-bottom: 4px;
}

.yearVertical {
    transform: rotate(-45deg);
    transform-origin: 75% bottom;
    margin-right: 5px;
    background: none;
}

.columnWrap {
    display: inline-block;
    vertical-align: bottom;
}

.fullYear {
    display: inline-block;
}
`;
export { css };