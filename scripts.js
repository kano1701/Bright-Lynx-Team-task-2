function pointSearch()
{
	var startPoint = document.getElementById('startPoint').value;
	var x = startPoint.charAt(0).toUpperCase();
	var y = Number(startPoint.charAt(1));

	switch(x)
	{
		case 'A':
			x = 1;
			break;
		case 'B':
			x = 2;
			break;
		case 'C':
			x = 3;
			break;
		case 'D':
			x = 4;
			break;
		case 'E':
			x = 5;
			break;
		case 'F':
			x = 6;
			break;
		case 'G':
			x = 7;
			break;
		case 'H':
			x = 8;
			break;
	}

	var allPoints = {};
	allPoints.point1 = [x+1, y+2];
	allPoints.point2 = [x+2, y+1];
	allPoints.point3 = [x+2, y-1];
	allPoints.point4 = [x+1, y-2];
	allPoints.point5 = [x-1, y-2];
	allPoints.point6 = [x-2, y-1];
	allPoints.point7 = [x-2, y+1];
	allPoints.point8 = [x-1, y+2];

	var str = "";

	for(var i = 1; i < 9; i++)
	{
		var key = "point"+i;
		var j = 1;

		if ((allPoints[key][0]>0 && allPoints[key][1]>0) && (allPoints[key][0]<9 && allPoints[key][1]<9))
		{
			switch(allPoints[key][0])
			{
				case 1:
					allPoints[key][0] = "A";
					break;
				case 2:
					allPoints[key][0] = "B";
					break;
				case 3:
					allPoints[key][0] = "C";
					break;
				case 4:
					allPoints[key][0] = "D";
					break;
				case 5:
					allPoints[key][0] = "E";
					break;
				case 6:
					allPoints[key][0] = "F";
					break;
				case 7:
					allPoints[key][0] = "G";
					break;
				case 8:
					allPoints[key][0] = "H";
					break;
			}
			str = str + allPoints[key][0] + allPoints[key][1] + " ";
		}
	}

	alert(str);
}