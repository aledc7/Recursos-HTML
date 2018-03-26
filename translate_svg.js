// translate svg element
function translate( _element , _x , _y )
{
  var transform = _element.transform.baseVal.getItem(0);   
  var mat = transform.matrix;   

  mat = mat.translate( _x, _y );  
  transform.setMatrix( mat );

}