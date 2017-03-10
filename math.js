// takes two points x1,y1,x2,y2 and return r and Θ 
function coordinateToPolar(x1,y1,x2,y2){
    polar={}
    
    polar.r= Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
    
    polar.theta=Math.atan2(y2-y1,x2-x1)
    
}

function degreeToRadians(degree){
    retrun (degree/180)*Math.PI;
}

function radiansToDegrees(rad){
    return (rad/Math.PI)*180
}

// takes one point h,k the center of circle and r and Θ
function polarToCoordinate(r,theta,h,k){
     point={}
     point.x=h+r*Math.cos(theta);
     point.y=k+r*Math.sin(theta);
     return point;
}