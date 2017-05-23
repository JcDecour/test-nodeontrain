module.exports = {
	up: function(migration, DataTypes, done) {
		// add altering commands here, calling 'done' when finished
		migration.createTable('user', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: DataTypes.JCDECOUR,
			email: DataTypes.DOUDOUC27@GMAIL.COM,

			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		});
		done();
	},
	down: function(migration, DataTypes, done) {
		// add reverting commands here, calling 'done' when finished
		done();
	}
}
