const simplifyPath = function(path) {
    let s = []
    let arr = path.split(/\/+/)
    for( let token of arr ){
        if( token == '.' || token == '' )
            continue
        else if(token=='..')
            s.pop()
        else
            s.push(token)
    }
    return '/'+s.join('/')
}