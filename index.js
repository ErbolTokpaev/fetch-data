"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(url)
            .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(data => {
            return data;
        });
    });
}
getData(COMMENTS_URL)
    .then(data => {
    ;
    const typedData = data;
    for (let i = 0; i < typedData.length; i += 1) {
        console.log(`ID: ${typedData[i].id}, Email: ${typedData[i].email}`);
    }
});
