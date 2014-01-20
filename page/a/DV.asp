<!--#include file="JSON_2.0.2.asp"-->
<%

dim data,i,len
data = -2
data=cint(Request.Form("aa"))


Class AppConfig
Dim XmlDom
Private Sub Class_Initialize()
Set XmlDom = Server.createobject("microsoft.xmldom")
XmlDom.load(Server.mappath("account.xml"))
End Sub
Private Sub Class_Terminate()
Set XmlDom = Nothing
End Sub
Function GetD(key,i)
GetD =XmlDom.getElementsByTagName(key)(i).text

End Function
Function GetLen()
GetLen = XmlDom.getElementsByTagName("account").length
End Function
Function SetD(key,len)
dim val
val = XmlDom.getElementsByTagName(key)(len).text
XmlDom.getElementsByTagName(key)(len).text = val+1
End Function
Function AddD(node,key,val)
Set newnode=XmlDom.getElementsByTagName(node)(0).appendchild(XmlDom.createelement(key))
newnode.text = val
Set newnode=Nothing
XmlDom.save(Server.mappath("account.xml"))
End Function
Function DelD(key)
On Error Resume Next
XmlDom.getElementsByTagName(key)(0).parentNode.removechild(XmlDom.getElementsByTagName(key)(0))
XmlDom.save(Server.mappath("account.xml"))
End Function
End Class


i = 0
Set Config = new AppConfig

ReDim o(1)
o(0) = 456
o(1) = data

if data = -1 then
else
Call Config.SetD("account",data) ' 编辑节点
end if
length = Config.GetLen()
ReDim name(0),count(0)
for a=0 to length-1
ReDim Preserve count(a)
count(a)=Config.GetD("account",a)
ReDim Preserve name(a)
name(a)=Config.GetD("name",a)

next

' 去掉相应的注释符,即可看到 [添加 / 编辑 / 删除] 节点的效果
'Call Config.AddD("Config","test","test") ' 添加节点
'Call Config.DelD("test") ' 删除节点
o(0) = 5
o(1) = 5
Dim myArray(2) '指定数组大小
myArray(0)="Jan"
myArray(1)="Feb"


dim fff(1,1)


fff(0,0) = "zero - zero"
fff(0,1) = "zero - one"
fff(1,0) = "one - zero"
fff(1,1) = "one - one"


Response.Write toJSON(fff)

%>