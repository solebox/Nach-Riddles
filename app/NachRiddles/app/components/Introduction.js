import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default class Introduction extends Component{
  render() {
    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
         <View style={{height:60, backgroundColor:"#2196F3"}}>
           <Text style={styles.titleText}>הוראות</Text>
         </View>
         <View style={styles.container}>
         <Image style={styles.imageStyle} source={require('../img/riddle.jpg')}>
         <View style={styles.backdropView}>
         <Text style={styles.lineText}>
           ברוכים הבאים למשחק "אביע חידות מני קדם"
           {"\n"}
           המשחק מבוסס על פי ספרו של דוד צברדלינג ז''ל.
           {"\n"}
           {"\n"}
           מטרת המשחק:
           {"\n"}לצבור כמה שיותר יהלומים.
           {"\n"}
           {"\n"}
           מטרה לימודית:
           {"\n"}לרכוש יידע בבקיאות על הפרשה עליה החידון מורכב.
           {"\n"}
           {"\n"}
           מבנה המשחק:
           {"\n"}
           בפיתוח המשחק ניסינו להיות כמה שיותר נאמנים למקור ועל כן חשוב לתת מספר דגשים למשחק.
           {"\n"}
           המשחק מכיל 54 חידונים כאשר כל חידון מכיל 22 חידות.
           {"\n"}
           {"\n"}
           בכותרת של מסך החידה מצויין שם הספר בנ''ך עליו מבוסס החידון, לדוגמא:
           {"\n"}
           <Image style={{height:70, resizeMode:'stretch'}}source={require('../img/book.png')}/>
           {"\n"}
           {"\n"}
           מתחת לכותרת מצויינים נתוני החידון הבאים:
           {"\n"}
           1. מספר החידה.
           {"\n"}
           2. פרשה מקבילה.
           {"\n"}
           3. שם החידון.
           {"\n"}
           {"\n"}
           <Image style={{height:90, width: 700}}source={require('../img/listA.png')}/>
           {"\n"}
           {"\n"}
           {"\n"}
           מספר חידה - זהו המספר של החידה המוצגת, ככל שתתקדמו יותר במשחק המספר הזה יעלה.
           {"\n"}
           {"\n"}
           פרשה מקבילה - הספר "אביעה חידות מני קדם" נכתב במקור כדי לעודד לימוד על פרשיות הנ''ך המלמדים את קורות עם ישראל מכניסתם לארץ ועד שיבת ציון,החלוקה נעשתה על פי פרשיות השבוע כדי ליצור מחזור שיהיה ניתן להשלים כל שנה בשמחת תורה, על כן לכל פרשה יש את הפרשה המקבילה לה, לדוגמא פרשת "יהושע" מקבילה לפרשת "בראשית", פרשת "יריחו" מקבילה לפרשת "נח" וכן הלאה.
           {"\n"}
           {"\n"}
           שם החידון - שם החידון והפרקים של הפרשה אותם יש ללמוד כדי לענות נכונה על החידון.
           {"\n"}
           {"\n"}
           {"\n"}
           מתחת לנתוני החידון מצויינת טבלת כלים לשחקן:
           {"\n"}
           1. הוראות.
           {"\n"}
           2. חנות הצלה.
           {"\n"}
           3. מספר יהלומים.
           {"\n"}
           {"\n"}
           <Image style={{height:90, width: 700}}source={require('../img/listB.png')}/>
           {"\n"}
           {"\n"}
           הוראות - בלחיצה על כפתור זה יפתח חלון אשר יציג את דף הוראות זה.
           {"\n"}
           חנות הצלה - חנות ההצלה מכילה רמזים על התשובה בכל חידון, רכישת רמז תגרור הפסד ביהלומים, ישנם שלושה סוגי רמזים:
           {"\n"}
                - רמז השווה יהלום אחד.
           {"\n"}
                - רמז השווה שני יהלומים.
           {"\n"}
           	    - מעבר לחידה הבאה, שווה לשלושה יהלומים.
           {"\n"}
           * במידה ולשחקן אין מספיק יהלומים הוא לא יוכל לרכוש נתונים מחנות ההצלה.
           {"\n"}
           {"\n"}
           מספר יהלומים - יציג את סכום היהלומים המצטבר לכל אורך המשחק.
           {"\n"}
           {"\n"}
           {"\n"}
           מתחת לטבלת הכלים תופיע החידה, מענה נכון על החידה תעביר אתכם לחידה הבאה.
           {"\n"}
           <Image style={{height:350, width: 700}}source={require('../img/DaRiddle.png')}/>
           {"\n"}
           {"\n"}
           מתחת החידה תופיע מגילת התשובה עליה יש להקיש את התשובה.
           {"\n"}
           {"\n"}
           <Image style={{height:350, width: 700}}source={require('../img/DaAnswer.png')}/>
           {"\n"}
           {"\n"}
           מתחת למגילת התשובה יופיעו שני כפתורים:
           {"\n"}
           1. בדוק - בודק את הפתרון שהוכנס במגילת התשובה.
           {"\n"}
           2. נקה - מסיר את הפתרון שהוכנס במגילת התשובה.
           {"\n"}
           {"\n"}
           <Image style={{height:90, width: 700}}source={require('../img/buttons.png')}/>
           {"\n"}
           {"\n"}
           {"\n"}
           {"\n"}
           משחק זה פותח באמצעות React-Native והוא מוגדר כקוד פתוח,
           {"\n"}
           כמו כן המשחק נבנה על ידי Guy Zwerdling בשיתוף פעולה עם צוות rumors.com,
           {"\n"}
           אנו מקווים שתהנו שתפיקו את המייטב היידע וההנאה מהמשחק.
           {"\n"}
           {"\n"}
           נודה לכם להשארת תגובות, הערות או הארות בדף של האפליקציה ב-Google-Store,
           {"\n"}
           או בשליחת דוא''ל לכתובת:
           {"\n"}
           Guy.Zwerdling@gmail.com
           {"\n"}
           תהנו.
           {"\n"}
           {"\n"}
           {"\n"}
           {"\n"}
       </Text>
       </View>
       </Image>
       </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center'
  },
imageStyle: {
  resizeMode: 'stretch',
  width: null,
  height: null
},
backdropView: {
  flex: 1,
  backgroundColor: 'rgba(255,255,255, 0.9)'
},
titleText: {
height: 45,
width: 360,
color: 'white',
fontSize: 60,
textAlign: 'center',
fontFamily: 'nrkis',
},
lineText: {
padding: 5,
color: 'black',
fontSize: 20,
},


});