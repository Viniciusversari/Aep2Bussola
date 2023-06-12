import app from '../app';

function main(){
    app.listen(3001,'localhost',()=>{
        console.log('Server running at http://localhost:3001/')
    })
}
main()