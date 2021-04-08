function Node(val){
    this.val=val;
    this.left=null;
    this.right=null;
}

const calculator = {
    compareNumeric(a,b){
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    },
    add(node,vals=[]){
        if(node!=null){
            vals.push(node.val);
            this.add(node.left,vals);
            this.add(node.right,vals);
            return vals;
        }
    },
    sum(vals){
        return vals.reduce((a,b)=>a+b,0);
    },
    median(vals){
        vals.sort(this.compareNumeric);
        let mid = Math.floor(vals.length/2);
        return vals.length%2==1 ? vals[mid]:(vals[mid]+vals[mid-1])/2;
    },
    calculate(node){
        let vals = this.add(node);
        return [this.sum(vals),this.sum(vals)/vals.length,this.median(vals)];
    },
}

exports.calculator = calculator;
exports.Node = Node;