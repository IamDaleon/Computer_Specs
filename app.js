const os=  require ('os');

const cpu = os.cpus()[1].model
const total = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
const ostype = os.type()
const speed = parseFloat((os.cpus()[1].speed / 1000).toFixed(1));
const platform = os.platform();
const arch = os.arch();
const osRelease = os.release();


function compSpecs() {
    console.log(`\n`.repeat(1));
    
    function roundToTwoDecimals(speed) {
        return speed.toFixed(2).replace(/\.(\d)$/, '.$1');
    }
    
    console.log(`CPU: ${cpu} \nCPU_Speed: ${roundToTwoDecimals(speed)} GHz`);
    
    console.log(`Total Memory: ${total}`);

    if(ostype ==="Darwin"){
        console.log(`OS: Apple \n`);
    }
    else if(ostype ==="Windows_NT")
    {
        console.log(`OS: Windows`);
    }
    else{
        console.log(`OS: Linux based\n`);
    }
    console.log(`Platform: ${platform}`);
    console.log(`Architecture: ${arch}`);
    console.log(`OS Release: ${osRelease}`);
    console.log(`\n`.repeat(1));
}

console.log(compSpecs());